// Extending a library via a namespace
namespace JQueryExtensions {
  export function highlight(element: JQuery): void {
    element.css("background-color", "yellow");
  }
}

// Usage with an existing library
JQueryExtensions.highlight($(".my-element"));
