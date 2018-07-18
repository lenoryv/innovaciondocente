<template>
  <section>
    <h1>Manual de uso del repositorio de planes docentes</h1>
    <div class="container">
      <ol class="list-group vertical-steps">
        <li class="list-group-item">
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit.</span>
        </li>
        <li class="list-group-item">
          <span>Aliquam tincidunt mauris eu risus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit.</span>
        </li>
        <li class="list-group-item">
          <span>Vestibulum auctor dapibus neque.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit.</span>
        </li>
        <li class="list-group-item">
          <span>Vestibulum auctor dapibus neque.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit.</span>
        </li>
      </ol>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/*Vertical Steps*/
.list-group.vertical-steps {
  padding-left: 10px;
  list-style: none;
  .list-group-item {
    border: none;
    border-left: 3px solid #0052c2;
    box-sizing: border-box;
    border-radius: 0;
    counter-increment: step-counter;
    padding-left: 20px;
    padding-right: 0px;
    padding-bottom: 20px;
    padding-top: 0px;
    &:last-child {
      border-left: 3px solid transparent;
      padding-bottom: 0;
    }
    &::before {
      border-radius: 50%;
      background-color: #0052c2;
      color: #fff;
      content: counter(step-counter);
      display: inline-block;
      float: left;
      height: 25px;
      line-height: 25px;
      margin-left: -35px;
      text-align: center;
      width: 25px;
    }
  }
}
</style>

