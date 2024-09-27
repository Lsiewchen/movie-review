package lsiewchen.movies;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection="movies")
@Data //lombok annotations - getters, setters, tostring, etc.
@AllArgsConstructor //constructor that initializes all fields
@NoArgsConstructor //constructor with no args, does not set any value
public class Movie {
    @Id
    private ObjectId id;
    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private List<String> genres;
    private String poster;
    private List<String> backdrops;
    @DocumentReference //store only id of referenced doc, lazy load by default
    private List<Review> reviewIds;
}
