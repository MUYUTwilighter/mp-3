import styled from "styled-components";

const Gallery = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`;

export default function Interests() {
    return <>
        <h1>Interests</h1>
        <hr/>
        <h2>Minecraft Modding</h2>
        <p>
            I have been playing Minecraft since junior high, and making mods for Minecraft for more than 2 years. One of
            the
            hottest of all is <a href="https://www.curseforge.com/minecraft/mc-mods/saplanting">Saplanting</a>, with
            total
            downloads over 200k.
        </p>
        <p>
            Actually, this is where I started learning Java. Even though Minecraft Modding is not usually considered as
            a good
            to learn Java, I still managed to become practical in Java. During the fall semester in 2024, I have been
            learning
            the course, Information Structures in Java, and gained an A for that course.
        </p>
        <h2>Music</h2>
        <p>
            I used to serve as a keyboard player for a band when I was an undergraduate, where I have started to develop
            the
            skill to both play and composite music.
        </p>
        <p>
            During my time in the USA, it's a pity that I cannot play the keyboard (My instruments are in China), but I
            still
            like to do some re-mixing and composing on my computer. Here are some of my favorite works:
        </p>
        <Gallery>
    <span>
        <i>(Remix from <a href="https://www.youtube.com/watch?v=Nru86VmoEK4" target="_blank">Supermoon</a>) Moorage </i>
        <br/>
        <audio src="/1.ogg" controls></audio>
    </span>
            <span>
        <i>(Original) Shading Journey </i>
        <br/>
        <audio src="/2.ogg" controls></audio>
    </span>
            <span>
        <i>(Arrange from <a href="https://www.youtube.com/watch?v=uPYNsGXbuzY" target="_blank">Moon Rabbit</a>) Moon Rabbit </i>
        <br/>
        <audio src="/3.ogg" controls></audio>
    </span>
        </Gallery>
    </>
}