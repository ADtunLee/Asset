var postRepository =  require('../repositories/post')
exports.getAll = async () =>{
    return await postRepository.getAll();
}