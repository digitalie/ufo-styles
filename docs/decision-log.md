## Decisions made

### not to use chained functions for composint styles
In order to combine complex style rules like border (all 4 sides with width, style and colour), we investigated something like this:

```javascript
border("none").top("solid").width("10px").color("teal");
```

this actually causes a few problems with composing/reusing styles. the objects returned from these functions have all other available options as functions, if these are composed with, say a margin() object, what does the .top() function do now? update the top margin or the top border?

### not build function for every combination of css rule parameters
for example, we dont have a function for all of the following css combinations. We have tried to only create functions that provide a useful set of functionaly, rather than recreating all CSS functionality in javascript

```css
padding: 1em;
padding: 10% 0;
padding: 10px 50px 20px;
padding: 10px 50px 30px 0;
```

### all 'utility' function should return a valid CSS style object
this approach meant we would need a large amount of fucntions to achieve a decent amount of flexibilty:

```javascript
borderNone,
borderTopStyle(borderStyles.SOLID),
borderBottomColor(10,10,10),
borderTopColor(10,10,10),
borderWidth(1),
borderTopStyle(borderStyles.SOLID),
backgroundColor("lightblue"),
```

so we decided that each ultilty could have a custom compose-like function of its own that could merge objects that contain shared CSS attributes. This means we dont need to creat functions for all combinations of attributes. For example:

```javascript
    const someStyle = compose(
        borderWidth(1),
        borderTop(
            borderWidth(5),
            borderColor({y},10,10),
            borderStyle(borderStyles.SOLID),
        ),
        shadow(
            shadowColor("lightblue"),
            shadowInset(1,1),
        ),
    );
```