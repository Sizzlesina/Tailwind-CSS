/*
* Display:
@ 1- block => You can still change the height and width of the element:
++ Example: div - h1 - p - li - section

@ 2- inline => There going to be displayed on the same line and you cant change the height and width of it:
++ Example: a - span - img - em - strong - i - small

@ 3- inline-block => Its in the middle of block and inline and we can change the height and width of it

@ 4- none => This display is not exist in Tailwind instead we have "invisible" and "hidden":

++ Invisible : it will not show the element but the place of the element still exists

++ Hidden : it will completely remove the element
@ 5- flex 
@ grid

* Flex:
@ - when we want to use the flex display we should have an container and then set the "flex" class for that container to behave as as a flex container

@ - flex-col is used to positioning flex items vertically and flex-row is used for positioning flex items horizontally

@ As simple as the name justify-(utility) is used for justify content of the flex items and items-(utility) is used for align items of the flex items


*Breakpoints in Tailwind:
- When we set set a class for a breakpoint we mean that if we reach above the breakpoint then apply the style for it

* Customizing theme:
- We can add some classes in the tailwind.config.js/theme by writing the new class in the theme/extend array but we must look up to the default codes of Tailwind

* Refrence:
- Tailwind color generator (site that we use for generating Tailwind colors)
- Font source (site that we can get fonts from and install them as a package and import them in the main.jsx file)

* Layers:
- We can change layes in Tailwind by writing the @layer (name of the layer) then change the styles using @apply
++ Example:
- This layer is used for custom classed for styling
@ @layer components{
  .btn-red{
    @apply bg-red-500
  }
}
- This layer is used for directive positions and stuff
@ @layer directives{
  .flex-center{
    @apply flex items-center justify-center
  }
}

- This layer is used for default element stlyes 
@ @layer base{
  p {
    @apply text-stone-500
  }
}

* Animation: 
- When we use a animation like hover:scale-(value) we can use transition but in the documentation says that we also need to use transform otherwise we can have weird behaviors


*/