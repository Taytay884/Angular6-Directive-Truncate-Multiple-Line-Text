# Angular6-Directive-Truncate-Multiple-Line-Text
Angular 6 directive that truncates multiple line text.

Usage:
Using two elements, container (div) and a child inside, (span).
Adding the directive to the container.

### Example:
--------
  HTML:
  ```
  <div appTruncateMultipleLineText class="name-container">
    <span>{{text...}}</span>
  </div>
  ```
  
  STYLE:
    Give the container constant height or max-height, when the textElement is taller than the container,
    It will truncate the text.
    
    .name-container {
      display: block;
      font-size: 13px;
      height: 26px;
      line-height: 13px;
    }

Every line is 13px, on the next line the span size will be 39px and the container is 26px.
This approach will cause text truncate.
