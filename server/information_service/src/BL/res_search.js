var res_search_stringRepository =  require('../repositories/res_search_string')
exports.find = async (key) =>{
    return await res_search_stringRepository.search(key);
}