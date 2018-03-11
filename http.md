HTTP缓存策略（4种）
1.expire  记录一个时间戳，在此之前的从缓存取，不发请求（单与服务器时间不一致时会混乱）
2.Cache-Control 返回一个相对时间，max-age 在未到达时不发送请求
3.Last-Modified  If-Modified-Since If-Unmodified-Since
4. etag If-None-Match  If-Match: ETag-value
