import React, { useContext } from 'react'
import './Contenu.css'
import { ThemeContext } from '../../Context/ThemeContext'

export default function Contenu() {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme ? 'contenu light' : 'contenu dark'}>
            <h1>Dolor elit voluptate exercitation .</h1>
Laboris in incididunt pariatur in ad esse tempor ex minim exercitation enim deserunt. Cupidatat voluptate est dolore tempor amet cupidatat deserunt do. Est adipisicing quis sint elit nulla ullamco culpa officia est excepteur elit. Excepteur ea quis minim minim dolore irure officia nostrud aliqua elit.

Sunt velit laborum dolore aliqua proident in. Ut cupidatat esse eiusmod est. Elit aute dolor sunt laborum voluptate ad non cupidatat elit aliqua ex sint.

Velit nostrud est dolor pariatur adipisicing occaecat aute. Tempor nostrud voluptate mollit deserunt veniam. Eiusmod amet sunt reprehenderit ex non velit non non tempor. Officia sit minim ex nostrud velit veniam adipisicing officia anim aliqua. Consectetur deserunt mollit est culpa nostrud enim in Lorem anim est sunt fugiat anim. Mollit ea esse minim incididunt qui eu.

Ut commodo laborum ad dolor aliqua labore dolor duis sit tempor et velit. Ipsum adipisicing nisi eu minim. Duis cupidatat commodo consequat qui. Laboris esse labore adipisicing dolore et culpa aute culpa. Consectetur enim anim velit id cillum aliqua incididunt tempor consequat mollit.

Consequat ut dolor qui aliquip sunt et eu commodo cupidatat cupidatat id magna. Voluptate et exercitation excepteur officia qui. Eu mollit tempor Lorem amet eiusmod in minim amet dolore ad commodo nisi veniam et.

Pariatur in duis minim ad dolore est ullamco id esse pariatur laboris reprehenderit est sint. In dolore irure adipisicing aute ex dolor laborum. Esse ullamco minim irure irure Lorem qui ea laborum. Officia irure ullamco proident quis Lorem velit ad irure elit do anim laborum in.

Mollit culpa nisi ipsum duis. Fugiat in commodo labore laborum nostrud dolor duis nostrud. Do exercitation cillum labore ipsum aliqua laboris voluptate excepteur. Nostrud duis labore irure non labore excepteur. Ut et velit cillum adipisicing veniam incididunt veniam veniam quis voluptate sit quis culpa est. Nisi qui aliquip eu officia ea commodo nisi sunt cupidatat dolore.

Eu incididunt nisi nulla enim esse. Occaecat enim esse reprehenderit ex ex consectetur occaecat est culpa adipisicing deserunt culpa officia veniam. Ipsum sint irure enim ut aute aliquip sunt et esse. Cupidatat sint voluptate cupidatat excepteur sint ea.
        </div>
    )
}
