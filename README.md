<div align="center">

<h1>📖 EventCatalog</h1>
<p>Discover, Explore and Document your Event Driven Architectures.</>

[![MIT License][license-badge]][license]
[![PRs Welcome][prs-badge]][prs]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]

<hr />

<img alt="header" src="https://github.com/boyney123/eventcatalog/blob/master/website/static/img/eventcatalog-screen1.png?raw=true" />

  <h3>Features: Website generateor for Event Driven Architectures, Markdown driven, Document Events/Services/Schemas, Event Versioning, Event/Service Owners, Schema Changelogs, and more...</h3>

[Read the Docs](https://eventcatalog.dev/) | [Edit the Docs](https://github.com/boyney123/eventcatalog) | [View Demo](https://demo.eventcatalog.dev)

</div>

<hr/>

# Core Features

- 🔎 Discover Events
- 📃 Document Events
- 📊 Visualise Events & Services
- ⭐ Supports any Event Schema
- 🗂️ Code Examples (Any Language)
- 🗄️ Event and Schema Versioning
- 📑 Event changelogs
- ⭐ And much more...

**All powered by markdown**

# The problem

Event-Driven Architectures allow us to scale, be agile and keen our architecture decoupled. 

When starting off with Event-Driven Architectures we spend time discovering our core business events, writing code to match them and maintain versions going forward.

Over a period of time more events are added to our domain, requirements change, and our architecture scales.

As more events, services and schemas get added to our domains they can be hard for our teams to discover and explore.

Discovery and documentation is a key part to scalable Event Driven Architecture and EventCatalog helps you maintain documentation for them.

**EventCatlaog was built to help document your EDA and help your teams explore and understand events, schemas and much more.**

Read more on these blogposts:

- [Introducing EventCatalog](https://www.boyney.io/blog/2022-01-11-introducing-eventcatalog)
- [Event-Driven Architecture: Beyond the Schema Registry](https://www.boyney.io/blog/2021-12-05-documenting-events)

# This solution

<!-- <img alt="header" src="./images/architecture-2.png" /> -->

Think of EventCatalog as a website generator that allows you to document your event architectures with markdown files.

Markdown files are quite a popular tool to help us document content, so why not use markdown files to document our events, services and schemas?

EventCatalog is focused on discovery and documentation and allows you to:

- Document Events/Schemas/Code Examples and more...
- Visually shows relationships between upstream/downstream services using your Events
- Allows you to version your documentation and supports changelogs
- Add owners to events and services so your teams know who owns which parts of your domain
- And much more...

EventCatalog is technology agnostic, which means you can integrate the Catalog with any EDA technology of your choice and any schema format.

EventCatlog supports a [Plugin Architecture](https://eventcatalog.dev/docs/api/plugins) which will let you generate documentation from your systems.

You can read more on [how it works on the website](https://eventcatalog.dev)

# Getting Started

You should be able to get setup within minutes if you head over to our documentation to get started 👇

➡️ [Get Started](https://eventcatalog.dev/docs/installation)

Or run this command to build a new catalog

```
npx @eventcatalog/create-eventcatalog@latest my-catalog
```

# Demo

Here is an example of a Retail system using events and services. Everything you see is driven by markdown files

[demo.eventcatalog.dev](https://demo.eventcatalog.dev)

You can see the markdown files that generated the website in the GitHub repo under [examples](/examples).

# Contributing

If you have any questions, features or issues please raise any issue or pull requests you like. We will try my best to get back to you.

[license-badge]: https://img.shields.io/github/license/boyney123/eventcatalog.svg?color=yellow
[license]: https://github.com/boyney123/eventcatalog/blob/main/LICENCE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[github-watch-badge]: https://img.shields.io/github/watchers/boyney123/eventcatalog.svg?style=social
[github-watch]: https://github.com/boyney123/eventcatalog/watchers
[github-star-badge]: https://img.shields.io/github/stars/boyney123/eventcatalog.svg?style=social
[github-star]: https://github.com/boyney123/eventcatalog/stargazers

# Sponsor

If you like what you see, feel free to sponsor the project.

# License

MIT.
