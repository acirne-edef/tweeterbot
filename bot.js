const config=require('./config')
const twit=require('twit')
const T=new twit(config)


function retweet()
{
let params={
     q:'#got',
     result_type: 'recent',
     count:100
    
}
T.get('search/tweets',params,(err,data,response)=>
{
let tweets=data.statuses
if(!err)
{
for(let dat of tweets)
{
    let retweetId = dat.id_str;
    T.post('statuses/retweet/:id', {id:retweetId},(err, response)=>
    {
    if (rensponse)
        console.log('Retweeted!!!'+ retweetId)
    if (err)
       console.log('Something went wrong while RETWEETING...Duplacation maybe...')

    })}}})}
setInterval(RETWEET,15000)
