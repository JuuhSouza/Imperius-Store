<template>
  <header>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <nav>
      <img src="../assets/img/imperiusStore.png" alt="Imperius Store" class="logo" />

      <ul>
        <li>
          <a href="#">
            <i class="fa-solid fa-house nav-icon"></i>
            <span class="nav-text">Início</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-solid fa-tags nav-icon"></i>
            <span class="nav-text">Promoções</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-solid fa-bone nav-icon"></i>
            <span class="nav-text">Produtos</span>
          </a>
        </li>
        <li>
          <a href="#" class="cart-link">
            <i class="fa-solid fa-cart-shopping"></i>
            <!-- <span class="cart-badge">3</span> -->
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
header {
  border-bottom: 1.5px solid var(--border-navbar);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  padding: 0.5rem 0;
}

nav {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-color-navbar);
}

.logo {
  height: 55px;
  width: auto;
  object-fit: contain;
}

nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

nav ul a {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--color-a);
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

nav ul a:hover {
  /* background: rgba(224, 123, 57, 0.1); */
  color: var(--color-a-hover);
}

.nav-icon {
  opacity: 0;
  font-size: 0.9rem;
  transform: translateX(-15px) scale(0.5);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  color: var(--color-icon);
}

nav ul a:hover .nav-icon {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.nav-text {
  display: inline-block;
  transition: transform 0.3s ease;
}

nav ul a:hover .nav-text {
  transform: translateX(3px);
}

.cart-link {
  padding: 0.6rem 1rem;
  position: relative;
}

.cart-link i {
  font-size: 1.2rem;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.cart-link:hover i {
  transform: translateY(-4px) rotate(-12deg);
}

.cart-badge {
  position: absolute;
  top: 2em;
  right: 3em;
  background: #e07b39;
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff8f4;
}
</style>