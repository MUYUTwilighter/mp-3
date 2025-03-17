import JsCalc from "./JsCalc.tsx";


export default function Projects() {
    return <>
        <h1>Projects</h1>
        <hr/>
        <h2>Mature Projects</h2>
        <ul>
            <li>
                <a href="https://www.curseforge.com/minecraft/mc-mods/saplanting">Saplanting</a>, my first minecraft mod
                work,
                which is also the hottest
            </li>
            <li>
                <a href="https://www.curseforge.com/minecraft/mc-mods/croparia-if">Croparia IF</a>, my most recently
                developed
                and published Minecraft mod, used to be a forked project, but was completely overwritten in Jan. 2024.
                This mod
                is the second interesting mod I have developed, as they bring a lot of new features to Minecraft.
            </li>
            <li>
                <a href="https://github.com/MUYUTwilighter/graime">Graime</a>, a cross-platform low-grain input method
                for
                Chinese characters. It can serve better ranking of Chinese words with the same pinyin by using a
                time-sensitive
                dictionary.
            </li>
        </ul>
        <h2>Under Construction</h2>
        <ul>
            <li>
                <a href="https://github.com/MUYUTwilighter/Croparia-IF-Dynamics">Croparia IF: Dynamics</a>, an add-on
                mod for
                Croparia IF, which I believe will become my most interesting mod. It adds a wireless transporting system
                for
                items & fluid (the API can actually serve all kinds of transportation), where the Elenet Nodes (you can
                view
                them as Access Points) can form a mesh-like network, Elenet, automatically.
            </li>
        </ul>
        <h2>JS Calculator</h2>
        <JsCalc/>
    </>
}