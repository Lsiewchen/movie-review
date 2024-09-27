package lsiewchen.movies;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface MovieRepository extends MongoRepository<Movie, ObjectId> {

    @Query("{ 'imdbId' : ?0 }")
    Optional<Movie> findByImdbId(String imdbId);
}
