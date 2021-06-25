<template>
<header>
    <nav>
        <ul>
            <li><router-link to="/tasks/add">Add Task</router-link></li>
            <li><router-link to="/tasks">All Tasks</router-link></li>
        </ul>
    </nav>
</header>
</template>
<style scoped>
header {
  width: 100%;
  height: 100px;
  background-color: #282A35;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: white;
  font-size: 1.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #fca55e;
}
</style>