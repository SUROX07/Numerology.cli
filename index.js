#!/usr/bin/env node


import { takeInput } from "./input.js";
import { intro } from "./intro.js";
import { compute } from "./compute.js";
import { getPredications } from "./gpt.js";
// IIFE
(async function (){
    // Intro 
    console.log(await intro());
    const dob = await takeInput();
    const singleDigit = compute(dob);
    getPredications(singleDigit);
})();