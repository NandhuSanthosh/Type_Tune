import strings from "@/constants/testString";

function pickString(isPunc: boolean, isNumber: boolean): string{
    const _filteredStrings = strings.filter( (x) => {
        return x.isPunc == isPunc && x.isNumber == isNumber
    })

    const _random = Math.floor(Math.random() * _filteredStrings.length)
    return _filteredStrings[_random].str as string
}   

export default pickString