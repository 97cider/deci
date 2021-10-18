export function parse_url(url){
    var url_regex = new RegExp("(?<=//)(.*?)(?=/)")
    try{
        var words = url_regex.exec(url)
        var first_match = words[0]
        return first_match
    }
    catch (error){
        alert(`No words found! - ${error}`)
        return NaN
    }
    finally{
        //wild
    }
}