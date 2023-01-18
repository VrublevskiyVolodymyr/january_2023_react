import {SimpsonComponent} from "../SimpsonComponent/SimpsonComponent";


const SimpsonsComponent=()=> {
    const simpsons = [
        {
            id: '1',
            itemName: 'Homer',
            pic: 'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png',
            text: `Homer Jay Simpson (born May 12, 1956)[40] is the main protagonist of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be 239 pounds)[41], lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn't. He also serves as the main protagonist of the The Simpsons Movie. Homer Simpson is in his late 30s and early 40s.`,
            phrases: '“Why you little...!”\n',
            description: '―Homer strangling or trying to strangle Bart/or someone else.'
        },
        {
            id: '2',
            itemName: 'Marge',
            pic: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png',
            text: `Marjorie Jacqueline "Marge" Simpson (née Bouvier)[11] is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family's antics by trying to maintain order in the Simpson household. Aside from her duties at home, Marge has flirted briefly with a number of careers ranging from a police officer to an anti-violence activist.`,
            phrases: 'It\'s true. Women aren\'t very good drivers.”\n',
            description: '―The Simpsons: Hit & Run'
        },
        {
            id: '3',
            itemName: 'Bart',
            pic: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png',
            text: `Bartholomew JoJo "Bart" Simpson (born Feburary 23 or April 1, 1980)[7]is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been nicknamed "Cosmo", after discovering a comet in "Bart's Comet". Bart has also been on the cover on numerous comics, such as "Critical Hit", "Simpsons Treasure Trove #11", and "Winter Wingding". Bart also has a 100-issue comic series entitled the Simpson Comics Presents Bart Simpson. Bart is loosely based on Matt Groening and his older brother, Mark Groening.`,
            phrases: '“Ay Caramba!”',
            description: `'―Bart's catchphrase and first words'`
        },
        {
            id: '4',
            itemName: 'Lisa',
            pic: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png',
            text: `Lisa Marie Simpson (born May 9, 1983)[9] is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.`,
            phrases: '“If anyone wants me, I\'ll be in my room.”',
            description: '―Lisa\'s "catchphrase"'
        },
        {
            id: '5',
            itemName: 'Maggie',
            pic: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png',
            text: `Margaret Evelyn[13] Lenny [14] "Maggie" Simpson (born January 14, 1988) is the 1-year-old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. She is often seen sucking on her pacifier, and when she walks, she trips over her clothing and falls on her face. Because she rarely ever talks, Maggie is the least seen and heard in the Simpson family. Maggie is at the very young, infant age of 1.`,
            phrases: '“Moe.”',
            description: '―Maggie\'s second non-canon word'
        }
    ]
    return (
        <div>
            {
                simpsons.map(simpson => <SimpsonComponent key={simpson.id} simpson={simpson}/>)
            }
        </div>
    )
}
export {SimpsonsComponent}

