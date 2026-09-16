---
name: log-words
description: Log every German word/phrase the user asked about in this conversation into data/words.js so the Wortschatz flashcard app stays up to date. Use when the user says "log words", "update my words", "save today's words", "update the app", or at the end of a German-learning chat.
---

# Log German Words

Update the vocab database `data/words.js` with every German word or phrase the user asked about in the **current conversation**.

## Steps

1. **Collect**: Scan this conversation for each German word/phrase the user asked to explain or translate. Ignore words that only appeared inside example sentences — only log what the user actually asked about. Normalize to the dictionary form (lemma): infinitive for verbs, singular with article for nouns (`die Abwesenheit`), base form for adjectives. If the user typed an inflected form (`kriegst`, `gedreht`), log the lemma but you may mention the typed form in `forms`.

2. **Source**: determine where the words came from.
   - A source is a video/article/podcast URL the user shared in the conversation, or passed as an argument (`/log-words <url>`). If none was shared, skip this step — words get `sources: []`.
   - For YouTube URLs: extract the video id → source id `yt-<videoId>`. If it's not yet in the `SOURCES` array in `data/words.js`, fetch title/channel/thumbnail via oEmbed (WebFetch `https://www.youtube.com/oembed?url=<url>&format=json`) and append an entry with fields `{id, type: "youtube", title, label, channel, url, thumb, added: <today>}`. `label` = a short memorable name derived from the title (e.g. "Mein Kulturschock"). If the fetch fails, ask the user for a title.
   - Non-YouTube URLs: same pattern with `type: "article"` etc., id slug from the domain/title.
   - Words the user says they picked up in daily life (office, street, conversations) with no URL: attach to the existing source `alltag` (type "life", "Alltag & Büro").
   - Tag every word logged in this run — new entries AND repeats — with the source id: append to the word's `sources` array if not already present.

3. **Read** `data/words.js` and check each collected word against existing entries (match on `id`).

4. **For repeats**: append today's date (ISO, `YYYY-MM-DD`) to `dates_searched` (only if not already present for today) and increment `search_count`.

5. **For new words**: append a full entry following the schema documented at the top of `data/words.js`. Fill every field:
   - `id`: lowercase slug of the lemma; transliterate umlauts (ä→ae, ö→oe, ü→ue, ß→ss)
   - `forms`: verbs → [3sg present, Präteritum, perfect with auxiliary]; nouns → [plural]; adjectives → [comparative, superlative]; phrases → common variants
   - `translations`: most common meaning first
   - `examples`: 2–3 `{de, en}` pairs — reuse the examples already given in the chat
   - `facts`: the usage notes from the chat — false friends, register, related words, case quirks
   - `grammar`: concise grammar rule(s) shown in a highlighted "Grammatik" box on the card — gender + plural for nouns, conjugation class/separability/reflexivity for verbs, case government (auf + Akk. etc.), declension or word-order rules for phrases. One to three short sentences.
   - `level`: honest CEFR estimate (A1–C2)
   - `difficulty`: 1–5. Consider word frequency (common = easier), irregularity, separability, false-friend risk, number of distinct meanings, and abstractness. A frequent regular word = 1–2; a polysemous or false-friend word = 3–4; rare/abstract/tricky = 5.
   - `tags`: reusable categories, e.g. `separable`, `reflexive`, `false-friend`, `colloquial`, `office-german`, `idiom`, `feminine/masculine/neuter`
   - `dates_searched`: `["<today>"]`, `search_count`: 1
   - `sources`: `["<source-id>"]` from the Source step, or `[]`

6. **Validate**: the file must remain valid JavaScript (`node --check data/words.js` if node is available, otherwise re-read carefully). Keep entries in the existing style.

7. **Report** a short summary table: `N new words logged, M repeats bumped`, listing each word with its translation and assigned level/difficulty, plus the source they were attached to. Remind the user they can open `index.html` to practice.

## Notes

- Never delete or rewrite existing entries; only append dates/count on repeats. If the user corrects a translation in chat, update that entry's content too.
- Today's date is in the environment context — do not guess it.
