

export default function removeCharacters(text:string):string {



const something = /<p>|<\/p>|<br>/g

    const trimmedText = text.replace(something, "")

return trimmedText
}