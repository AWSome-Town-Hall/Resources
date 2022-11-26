# AWSome Town Hall

[AWSome Town Hall](AWSome-Town-Hall.github.io) is a open source community website that aims to list every
Amazon Web Services(AWS) learning resource currently available online. 🎉

You can find tutorials that interest you in several ways:

- **Browse** the list (recent tutorials are listed first) 👀
- **Search** for specific words or phrases 🕵️‍♀️
- **Filter** by format (🎧, ✍️ or 📺)
- **Filter** by topic 🤷‍♂️
- **Filter** by author 👩‍🏫
- **Filter** by source 🗞️

Notice a tutorial is missing from the list? Please add it! 🙏

## How do I add a tutorial?

The easiest approach is to use the make your changes here on GitHub:

1. Clone the GitHub Repository ``git clone https://github.com/AWSome-Town-Hall/AWSome-Town-Hall.github.io.git ``

2. Create a new branch from main branch `` git checkout -b <githubusername-patch>``

3. **Open** the [`src/data/tutorials.yml` file on GitHub](https://github.com/AWSome-Town-Hall/AWSome-Town-Hall.github.io/blob/main/src/data/tutorials.yml) 📂
2. Use the **file editor** to add a new tutorial (or edit existing ones) ✏️
3. **Preview** your changes 👓
4. **Staged & Commit** your changes using this command ``git add . && git commit -m "your change"``👍
5. **Push** your change using this command ``git push <branch name>``
5. Create a **pull request** from your ``branch`` to ``main``📤
5. Assign the **Pull request** to @adilshehzad786

**Please follow this format and indentation:**

```yaml
- title: 'Getting Started with AWS'
  link: http://aws.training/
  formats:
    - video
    - text
  language: en
  date: 2022-11-26
  authors:
    - AWS Training
  source: AWS
  topics:
    - AWS
    - Freemium
```

- `title` - Title of tutorial (`string`; required)
- `link` - Working URL where tutorial can be found (`string`; required)
- `formats` - Media format of tutorial (`array` of `strings` with values `video`,
  `audio` or `text`; required)
- `language` - Spoken/written language of the tutorial (`string` with a two-letter
  [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes);
  required)
- `date` - Date tutorial was published (`string` in `YYYY-MM-DD` format; optional)
- `authors` - Name of author(s) or speaker(s) (`array` of `strings`; optional)
- `source` - Name of YouTube channel, podcast, conference, blog, etc. if different from
  author's name (`string`; optional)
- `topics` - Main topic(s) covered by the tutorial (`array` of `strings`; required)

### What if the tutorial is part of a series?

Rather than adding every tutorial in the series separately, please add the entire series
as one entry that links to the series homepage (or the first tutorial in the series).

