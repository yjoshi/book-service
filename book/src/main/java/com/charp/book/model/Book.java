package com.charp.book.model;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Book")
public class Book {
    @Id
    @JsonSerialize(using= ToStringSerializer.class)
    private ObjectId id;

    private String title;
    private String author;
    private int pubYear;
    private int pages;
    private String genre;
    private int currPage;
    private int rating;

    public Book() {

    }

    public Book(String title, String author, int pubYear, int pages, String genre, int rating) {
        this.title = title;
        this.author = author;
        this.pubYear = pubYear;
        this.pages = pages;
        this.genre = genre;
        this.rating = rating;
    }

    public ObjectId getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String setTitle(String title) {
        this.title = title;
        return this.title;
    }

    public String getAuthor() {
        return author;
    }

    public String setAuthor(String author) {
        this.author = author;
        return this.author;
    }

    public int getPublicationYear() {
        return pubYear;
    }

    public int setPublicationYear(int pubYear) {
        this.pubYear = pubYear;
        return this.pubYear;
    }

    public int getPages() {
        return pages;
    }

    public int setPages(int pages) {
        this.pages = pages;
        return this.pages;
    }

    public String getGenre() {
        return genre;
    }

    public String setGenre(String genre) {
        this.genre = genre;
        return this.genre;
    }

    public int getRating() {
        return rating;
    }

    public int setRating(int rating) {
        this.rating = rating;
        return this.rating;
    }

    @Override
    public String toString() {
        return "Book [id=" + id + ", title=" + title + ", author=" + author + ", pubYear=" + pubYear +
                ", pages= " + pages + ", genre= " + genre + ", rating= " + rating + "]";
    }
}

