const ContentBasedRecommender = require('content-based-recommender')

const posts = [{
        id: '1000001',
        content: 'TenZ kills WARDELL with Sherrif',
    },
    {
        id: '1000002',
        content: 'Code Switch | Episode 2',
    },
    {
        id: '1000003',
        content: 'Valorant | Immortal today?',
    },
    {
        id: '1000004',
        content: 'Valorant live stream chills !insta',
    },
    {
        id: '1000005',
        content: 'Gamers For India Fundraiser For Covid19 Relief With MPL Esports',
    },
    {
        id: '1000006',
        content: 'Live Valorant India #TM CC',
    },
    {
        id: '1000007',
        content: 'Apex Legends',
    },
    {
        id: '1000008',
        content: 'Valorant live stream India',
    },
    {
        id: '1000009',
        content: 'Valorant live stream India Weekend chills !insta',
    },
];

const tags = [{
        id: '1',
        content: 'Valorant',
    },
    {
        id: '2',
        content: 'Apex Legends',
    },
    {
        id: '3',
        content: 'Live',
    },
    {
        id: '4',
        content: 'India',
    },
    {
        id: '5',
        content: 'Game',
    },
    {
        id: '6',
        content: 'Podcast',
    },
    {
        id: '7',
        content: 'Covid19',
    },
];


var taggedPosts = []

const tagMap = tags.reduce((acc, tag) => {
    acc[tag.id] = tag;
    return acc;
}, {});


function tagPosts(callb) {
    const recommender_1 = new ContentBasedRecommender();

    recommender_1.trainBidirectional(posts, tags);

    for (let post of posts) {
        const relatedTags = recommender_1.getSimilarDocuments(post.id);
        const tags = relatedTags.map(t => tagMap[t.id].content);

        var new_post = {
            id: post.id,
            content: post.content + ' | ' + tags.join(' ')
        }

        taggedPosts.push(new_post)
    }

    callb();
}

function getSimilar() {
    const recommender_2 = new ContentBasedRecommender({
        minScore: 0.1,
        maxSimilarDocuments: 100
    });

    recommender_2.train(taggedPosts);

    //get top 10 similar items to document 1000002
    const similarDocuments = recommender_2.getSimilarDocuments('1000003', 0, 100);
    var filteredPosts = [];

    similarDocuments.forEach(document => {
        filteredPosts.push(taggedPosts.filter(post => post.id == document.id))
    })

    console.log(filteredPosts)
}

tagPosts(getSimilar)