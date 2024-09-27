package lsiewchen.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    MongoTemplate mongoTemplate;

    public Review createReview(String body, String id) {
        Review review = reviewRepository.insert(new Review(body));

        mongoTemplate.update(Movie.class)
        .matching(Criteria.where("imdbId").is(id))
        .apply(new Update().push("reviewIds").value(review))
        .first();

        return review;
    }
}
