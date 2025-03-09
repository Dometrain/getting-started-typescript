# tsconfig Settings

At the start of the course, we briefly looked at tsconfig. As I showed, it's complicated with over 100 options. The good news is you normally don't need to worry about most of them, and you rarely need to create a tsconfig from scratch. Here's a few reasons why:

1. First, many popular frameworks have TypeScript support built in. For example, when you create an app using Vite, you can just tell Vite that you want to use TypeScript and it properly configures TypeScript to work with both Vite and the JS library of your choice. Notice that no config is required. I can immediately start writing TypeScript code.
2. Many tools publish a recommended tsconfig settings. For example, Bun provides [recommended tsconfig settings](https://bun.sh/docs/typescript#suggested-compileroptions).
3. Some tools like Playwright have TypeScript support built in and automatically use your project's tsconfig.
4. Consider using one of the pre-built tsconfigs available on https://github.com/tsconfig/bases.
5. If none of the above are a good fit, then I suggest you start with a minimal tsconfig and add options as you need them.

I discuss tsconfig settings in more detail in the deep dive course.
