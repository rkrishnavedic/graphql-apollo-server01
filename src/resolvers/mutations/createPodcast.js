module.exports = async (_, {input}, {models})=>{
    const newPodcast = await models.Podcast.create(input);
    return newPodcast;
}