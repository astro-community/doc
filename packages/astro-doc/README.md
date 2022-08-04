# Astro Doc

**Astro Doc** lets you create document layouts with minimal markup in [Astro](https://astro.build).

[![NPM Version][npm-img]][npm-url]
[![NPM Downloads][download-img]][download-url]

You write this:

```astro
---
import Document from '@astropub/doc'
---
<Document title="Astro Doc" body-class="p-body">
  <h1>
    Astro Doc
  </h1>
  <p>
    The HTML, HEAD, and BODY tags are all set.
  </p>
</Document>
```

You get this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Astro Doc</title>
    <meta name="viewport" content="width=device-width" />
    <meta name="disabled-adaptations" content="watch" />
    <meta property="og:title" content="Astro Doc" />
  </head>
  <body class="p-body">
    <h1>
      Astro Doc
    </h1>
    <p>
      The HTML, HEAD, and BODY tags are all set.
    </p>
  </body>
</html>
```

[![Open in StackBlitz][stackblitz-img]][stackblitz-url]

## Usage

Install **Astro Doc** to your project.

```shell
npm install @astropub/doc
```

Use **Astro Doc** components in your project.

```astro
---
import Document from '@astropub/doc'
---
<Document>
  <p>
    The HTML, HEAD, and BODY tags are all set.
  </p>
</Document>
```

You get this:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="disabled-adaptations" content="watch" />
  </head>
  <body>
    <p>
      The HTML, HEAD, and BODY tags are all set.
    </p>
  </body>
</html>
```

## Features

### Embedded Attributes

#### title

Defines the title of the document, without any additional taglines.

```jsx
<meta property="og:title" content={title} />
```

#### description

Defines the summary of the content of the current document.

```jsx
<meta name="description" content={description} />
```

#### sitetitle

Defines the title of the site, without any additional taglines.

```jsx
<meta property="og:site_name" content={sitetitle} />
```

#### tabtitle

Defines the title of the document used by the tab, which may include additional taglines.

```jsx
<title>{title}</title>
```

#### type

Defines the category or type of the current document. By default, this is **webpage**.

```jsx
<meta property="og:type" content={type} />
```

#### url

Defines the canonical URL of the current document. By default, this is the value of `Astro.url`. If the URL does not include a protocol or domain, it will be resolved against `Astro.site`.

```jsx
<meta property="og:url" content={resolvedURL(url)} />
```

#### imageurl

Defines the URL of the image representing the current document. If the URL does not include a protocol or domain, it will be resolved against `Astro.site`.

```jsx
<meta property="og:image" content={resolvedURL(imageurl)} />
```

#### imagealt

Defines the description for the image representing the current document.

```jsx
<meta property="og:image:alt" content={imagealt} />
```

#### twittercard

Defines the summary card used by Twitter. By default, this is `summary_large_image` if `imageurl` is defined.

```jsx
<meta name="twitter:card" content={twittercard} />
```

_Note: This is the only embedded attribute not shared across social networks._

#### robots

How search engines should follow the current document.

```jsx
<meta name="robots" content={robots} />
```

### Application Attributes

#### viewport

Defines the area through which the document is viewed.

```jsx
<meta name="viewport" content={viewport} />
```

#### disabledadaptations

Defines whether the website is compatible without adaptations smaller viewports.

```jsx
<meta name="disabled-adaptations" content={disabledadaptations} />
```

#### icon

Defines the image used by the website to represent the current document in some browser tabs, browser history views, toolbar apps, bookmarks dropdowns, search bars, and search bar recommendations. The `type` will be automatically detected.

```jsx
<link rel="icon" href={icon} type={resolvedIconType(icon)} />
```

#### touchicon

Defines the image used by common handheld devices, such as Apple or Android phones. Presently, the size is hard-coded to `180x180`.

```jsx
<link rel="apple-touch-icon" sizes="180x180" href={touchicon} />
```

#### charset

Defines the character encoding for the document. By default, this is `utf-8`.

```jsx
<meta charset={charset} />
```

### Head Slot

Additional elements may be placed in the `<head>` tag thru use of the `head` slot.

```astro
---
import Document from '@astropub/doc'
---
<Document title="Astro Doc" body-class="p-body">
  <meta slot="head" name="twitter:creator" content="@jon_neal" />
  <link slot="head" rel="alternate" type="application/rss+xml" title="Blog" href="/blog.xml" />

  <h1>
    Astro Doc
  </h1>
  <p>
    The HTML, HEAD, and BODY tags are all set.
  </p>
</Document>
```

[npm-img]: https://img.shields.io/npm/v/@astropub/doc?color=%23444&label=&labelColor=%23CB0000&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjE1MCAxNTAgNDAwIDQwMCIgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTE1MCA1NTBoMjAwVjI1MGgxMDB2MzAwaDEwMFYxNTBIMTUweiIvPjwvc3ZnPg==&style=for-the-badge
[npm-url]: https://www.npmjs.com/package/@astropub/doc
[stackblitz-img]: https://img.shields.io/badge/-Open%20in%20Stackblitz-%231374EF?color=%23444&labelColor=%231374EF&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjEwIDggMTIgMTgiIGhlaWdodD0iMTgiIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik0xMCAxNy42aDUuMmwtMyA3LjRMMjIgMTQuNGgtNS4ybDMtNy40TDEwIDE3LjZaIi8+PC9zdmc+&style=for-the-badge
[stackblitz-url]: https://stackblitz.com/github/astro-community/astro-doc
[bundlejs-img]: https://img.shields.io/badge/dynamic/json?url=https://bundlejs.com/api?q=@astropub/doc&query=size.totalCompressedSize&color=%23444&labelColor=%233B82F6&label=&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3MDAgNzAwIiBmaWxsPSIjRkZGIj4KCTxwYXRoIGQ9Ik0xNDYgMkExNzEgMTcxIDAgMCAwIDMgMTM5bC0yIDExdjQwMmwyIDExYzE1IDcyIDcxIDEyNSAxNDMgMTM2bDIwOSAxIDE5OS0xIDktMmM3MC0xNiAxMTktNjYgMTM0LTEzNWwyLTEwVjE1MGwtMi0xMkExNzEgMTcxIDAgMCAwIDU2MiAzbC0xMC0yLTE5OS0xQzE4NyAwIDE1MyAwIDE0NiAyem0xODEgMjUxdjM2bDctM2MxMy02IDMzLTkgNTAtNyA0MSA1IDcwIDM0IDgwIDc4IDIgMTIgMiA0MSAwIDUzLTUgMjItMTMgMzgtMjcgNTJhODIgODIgMCAwIDEtNjMgMjZjLTE1IDAtMTkgMC0yNS0yLTEwLTItMTctNi0yNC0xMGwtNS0zdjExaC00NVYyMTdoNTJ2MzZ6bTI5IDcxYy0yMCAzLTMyIDE5LTM1IDQ4LTMgMjUgMyA0OCAxNCA2MCA1IDYgMTMgMTAgMjMgMTEgMjUgNCA0NC05IDUxLTM2bDMtMTljMC0xNy0xLTI3LTctMzktOS0xOS0yNi0yOC00OS0yNXoiLz4KPC9zdmc+&style=for-the-badge
[bundlejs-url]: https://bundlejs.com/?bundle&q=@astropub/doc
[license-img]: https://img.shields.io/npm/l/@astropub/doc?color=%23444&labelColor=%232DA44E&label=&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTMxLjk2LjMxYTMwLjQ3IDMwLjQ3IDAgMCAwLTIyLjIzIDkuMkEzMS45IDMxLjkgMCAwIDAgLjM1IDMyYTMxLjEgMzEuMSAwIDAgMCA5LjMgMjIuMzEgMzEuMzYgMzEuMzYgMCAwIDAgMjIuMyA5LjM4IDMyLjIgMzIuMiAwIDAgMCAyMi42Ny05LjQ2YzUuOS01LjgyIDkuMDMtMTMuNTUgOS4wMy0yMi4yMyAwLTguNi0zLjEzLTE2LjQtOS4xMi0yMi40QTMxLjI4IDMxLjI4IDAgMCAwIDMxLjk2LjMxem0uMDggNS43M2EyNS41IDI1LjUgMCAwIDEgMTguNCA3LjY0QTI1LjUgMjUuNSAwIDAgMSA1Ny45MyAzMmMwIDcuMTItMi41MiAxMy4zNy03LjM4IDE4LjE1YTI2LjM0IDI2LjM0IDAgMCAxLTE4LjUgNy43MiAyNS41NyAyNS41NyAwIDAgMS0xOC4yMy03LjY0QTI1LjggMjUuOCAwIDAgMSA2LjA4IDMyYTI2LjIgMjYuMiAwIDAgMSA3LjczLTE4LjQgMjQuOSAyNC45IDAgMCAxIDE4LjIzLTcuNTZ6Ii8+PHBhdGggaWQ9ImEiIGQ9Ik0zMS42NCAyNi43M2MtMS44LTMuMjYtNC44NS00LjU2LTguNC00LjU2LTUuMTUgMC05LjI2IDMuNjUtOS4yNiA5LjgzIDAgNi4yOCAzLjg2IDkuODMgOS40NCA5LjgzYTkuNSA5LjUgMCAwIDAgOC4zMi00Ljk1bC0zLjkzLTJjLS44OCAyLjEtMi4yMSAyLjc0LTMuOSAyLjc0LTIuOTEgMC00LjI1LTIuNDMtNC4yNS01LjYyIDAtMy4yIDEuMTMtNS42MiA0LjI1LTUuNjIuODUgMCAyLjUzLjQ2IDMuNTEgMi41N2w0LjIxLTIuMjJ6Ii8+PHVzZSBocmVmPSIjYSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMjgpIi8+PC9zdmc+&style=for-the-badge
[license-url]: https://choosealicense.com/licenses/cc0-1.0/
[download-url]: https://www.npmjs.com/package/@astropub/doc
[download-img]: https://img.shields.io/badge/dynamic/json?url=https://api.npmjs.org/downloads/point/last-week/@astropub/doc&query=downloads&label=↓/week&color=%23444&labelColor=%23EEd100&style=for-the-badge
