/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

const squares = document.querySelectorAll(".squares");

squares.forEach((square, index)=>{
    square.style.borderWidth = (index + 1) * 4 + "px";
    square.style.animationName = `rotate-${index}`;

    const degree = (index + 1) * 360 * 2;

    const animation = document.createElement("style");
    animation.innerHTML = `@keyframes rotate-${index}{
        to{
            transform:translate(-50%,-50%) rotate(${degree}deg);
            border-radius: 50%;
            opacity:0.1;
            border: 60px solid #b9ff73;
        }
    
    }`;

    document.body.appendChild(animation);
});