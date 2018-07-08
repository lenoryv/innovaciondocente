<template>
  <div>
    <Navbar/>
    <nuxt/>
    <Cards/>
    <CafeCientifico/>
    <LiiD/>
    <QuienesSomos/>
    <Suscripcion/>
    <FooterIndex/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Cards from "@/components/Index/Cards";
import CafeCientifico from "@/components/Index/CafeCientifico";
import LiiD from "@/components/Index/Liid";
import QuienesSomos from "@/components/Index/QuienesSomos";
import FooterIndex from "@/components/Index/FooterIndex";
import Suscripcion from "@/components/Suscripcion";

export default {
  components: {
    Navbar,
    Cards,
    LiiD,
    QuienesSomos,
    CafeCientifico,
    Suscripcion,
    FooterIndex
  }
};
</script>