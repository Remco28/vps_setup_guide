# Architect's Guide to VitePress

This document provides an overview of VitePress, the technology we will use to build the VPS Setup Guide website.

## 1. What is VitePress?

VitePress is a **Static Site Generator (SSG)**. It's a tool that takes simple text files written in **Markdown** and transforms them into a complete, high-performance, pre-built website.

The "static" part means the final output is just HTML, CSS, and JavaScript files. This makes the website incredibly fast, secure, and easy to host on any web server, including the Nginx instance we'll be setting up.

## 2. Why Did We Choose VitePress?

*   **Content-Focused:** It allows us to write and manage the guide's content using simple Markdown, which is perfect for documentation.
*   **Performance:** VitePress sites are extremely fast because they are pre-rendered.
*   **Features for Docs:** It comes with essential features for a technical guide "out of the box," such as:
    *   A clean, professional, and responsive default theme.
    *   Automatic sidebars based on page headings.
    *   Configurable top navigation.
    *   Built-in full-text search.
*   **Extensible and Interactive:** As discussed, it is not just for static text.

## 3. The Key Feature: Vue Components in Markdown

This is the most powerful feature for our needs. While we write most of our content in Markdown, we can seamlessly embed interactive **Vue.js components** anywhere on a page.

**How it works:**
You can register custom components (which are like mini web apps) and then use them in your Markdown file just like you would use a standard HTML tag.

```markdown
# My Page

Here is some standard text.

<MyInteractiveComponent />

More standard text follows.
```

## 4. Examples of Interactive Possibilities

By creating simple Vue components, we can add rich features to our guide:

*   **Code Blocks with Copy Buttons:** Allow users to copy commands with a single click.
*   **Tabbed Content:** Show different instructions for different Linux distributions (e.g., Ubuntu vs. CentOS) in a clean, tabbed interface.
*   **Image Lightboxes:** Click an image to see a full-screen, zoomable version.
*   **Interactive Checklists:** For tracking steps in a complex process.
*   **Callout Panels:** Custom-styled `<div>` blocks for tips, warnings, or important notes.

This approach gives us the simplicity of Markdown for writing and the full power of a modern JavaScript framework for interactivity.

## 5. Developer's Guide: Creating Interactive Content

Here are the practical patterns for creating the interactive elements we've discussed.

### Reusable Components with Props

To avoid duplicating code, we should create single, reusable components that can be configured with "props". For example, instead of creating `chart1.vue`, `chart2.vue`, etc., you create one `Chart.vue` and pass data to it.

**1. Create a Reusable Component**

Place your component in `docs/.vitepress/components/`. The component should be designed to accept its data via props.

```vue
<!-- docs/.vitepress/components/FlowChart.vue -->
<template>
  <div class="flowchart">
    <!-- A real component would render a chart here based on the data -->
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup>
// This tells the component to expect a 'data' prop of type Object
defineProps({
  data: Object
})
</script>
```

**2. Use the Component in Markdown**

You can now use this component multiple times, passing different data each time. Note the `:` before the `data` prop, which tells Vue you're passing a JavaScript object.

```markdown
### Chart 1: User Login Flow

<FlowChart :data="{ nodes: ['Start', 'Enter Credentials', 'Success'], edges: [['Start', 'Enter Credentials'], ['Enter Credentials', 'Success']] }" />

### Chart 2: Password Reset Flow

<FlowChart :data="{ nodes: ['Start', 'Request Reset', 'Email Sent'], edges: [['Start', 'Request Reset'], ['Request Reset', 'Email Sent']] }" />
```

### Tabbed Content

You can create tabbed content within a single Markdown file using VitePress's "Code Group" feature. While intended for code, it works for any Markdown content.

````markdown
::: code-group

```md [Ubuntu]
This is the content for the Ubuntu tab.

- Step 1
- Step 2
```

```md [CentOS]
This is the content for the CentOS tab.

> A blockquote or any other markdown content.
```

:::
````

## 6. Ideas for Interactive Components

Here is a list of potential interactive components we could build to enhance the guide.

*   **Interactive Checklists:** For multi-step processes, allow users to track their progress.
*   **Configuration Generators:** Create forms that generate configuration files (e.g., for Nginx) based on user input.
*   **Interactive Troubleshooting:** Build decision-tree components to help users diagnose and solve common problems.
*   **Glossary with Tooltips:** Create a component that displays definitions for technical terms when a user hovers over them.
