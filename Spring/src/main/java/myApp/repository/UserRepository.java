package myApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import myApp.model.User;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends JpaRepository <User, Integer> {

}