import {surpriseMePrompts} from "../constants";

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

    const randomPrompt = surpriseMePrompts[randomIndex]

    //for making sure we avoid the same random prompt
    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}