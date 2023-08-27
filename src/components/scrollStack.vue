<template>
  <div class="wrapper">
    <div class="scroll-cards">
      <h1>Some Sticky-Stacked Cards</h1>
      <article class="scroll-cards__item" aria-label="Wie - 1">
        <h2>Nice little headline</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eveniet
          rem repudiandae quam illo, odio velit eius sunt architecto ratione
          iure deserunt magnam aut tenetur sint incidunt, ipsam id. Ab?
        </p>
      </article>
      <article class="scroll-cards__item" aria-label="Wie - 1">
        <h2>Another Headline here</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eveniet
          rem repudiandae quam illo, odio velit eius sunt architecto ratione
          iure deserunt magnam aut tenetur sint incidunt, ipsam id. Ab?
        </p>
      </article>
      <article class="scroll-cards__item" aria-label="Wie - 1">
        <h2>Third Card follows</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eveniet
          rem repudiandae quam illo, odio velit eius sunt architecto ratione
          iure deserunt magnam aut tenetur sint incidunt, ipsam id. Ab?
        </p>
      </article>
      <article class="scroll-cards__item" aria-label="Wie - 1">
        <h2>Will there be another?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eveniet
          rem repudiandae quam illo, odio velit eius sunt architecto ratione
          iure deserunt magnam aut tenetur sint incidunt, ipsam id. Ab?
        </p>
      </article>
      <article class="scroll-cards__item" aria-label="Wie - 1">
        <h2>Last one</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eveniet
          rem repudiandae quam illo, odio velit eius sunt architecto ratione
          iure deserunt magnam aut tenetur sint incidunt, ipsam id. Ab?
        </p>
      </article>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
*,
*:before,
*:after
  box-sizing: border-box


.wrapper
//   background: #003
  max-width: 60em
  margin: 0 auto

.scroll-cards
  counter-reset: card
  position: relative
  display: block
  padding-bottom: 120vh

  > .scroll-cards__item + .scroll-cards__item
    margin-top: 40vh

  h1
    position: sticky
    top: 2rem
    font-size: 2em
    margin: 0 0 0.5em

.scroll-cards__item
  --offset: 0.5em
  color: #000
  position: sticky
  top: max(16vh, 10em)
  padding: 2em 1.5em
  min-height: 19em
  background: #fff
  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.1)
  width: calc(100% - 5 * var(--offset))

  @for $i from 0 through 5
    &:nth-of-type(#{$i})
      transform: translate(calc((#{$i} - 1) * var(--offset)), calc((0 - 1) * var(--offset)))

h2
  font-size: 1.25em
  text-transform: uppercase
  margin: 0

p
  font-size: 1.25em
  line-height: 1.5

@media screen and (min-width: 37em)
  h1
    font-size: 3em

  .scroll-cards__item
    --offset: 1em
    padding-left: 5em

    &:before
      counter-increment: card
      content: "0" counter(card)
      display: flex
      align-items: center
      justify-content: center
      width: 2.75em
      height: 2.75em
      background: #f09
      color: #fff
      text-align: center
      border-radius: 50%
      position: absolute
      left: 1.25em
      top: 1.25em
      font-weight: bold

@media screen and (min-width: 62em)
  .scroll-cards
    h1
      font-size: 3em

  .scroll-cards__item
    --offset: 1.25em
    max-width: 42em
</style>
