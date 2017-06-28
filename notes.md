Modular JavaScript
Some ground rules:
- self-contained module

    -everything to do with my module is in my module

    -no global variables

    -if a module manages more than one thing it should be split up

- separation of concerns

- DRY code: Don't repeat yourself
- efficient DOM usage
    very few $(selections)  
- no memory leaks
    - all events can be unbound
