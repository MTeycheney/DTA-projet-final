package fr.dta.projetFinal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.dta.projetFinal.model.MyUser;
import fr.dta.projetFinal.repository.MyUserRepository;

@RestController
@RequestMapping("/api/MyUser")
public class MyUserController
{

	@Autowired
	MyUserRepository myuserrepos;
	
	@GetMapping("/")
	@CrossOrigin(origins = "*")
    public List<MyUser> greeting()
	{
        return (List<MyUser>) myuserrepos.findAll();
    }
	
	@CrossOrigin(origins = "*")
	@GetMapping("/{id}")
    public Optional<MyUser> greeting(@PathVariable long id)
	{
        return myuserrepos.findById(id);
    }
	

	@CrossOrigin(origins = "*")
	@PostMapping("/addMyUser")
    public MyUser insertMyUser(@RequestBody MyUser user)
	{
        return myuserrepos.save(user);
    }
	

	@CrossOrigin(origins = "*")
	@PutMapping("/updateMyUser")
    public MyUser updateMyUser(@RequestBody MyUser user)
	{
		return myuserrepos.save(user);
    }
	

	@CrossOrigin(origins = "*")
	@DeleteMapping("/deleteMyUser/{id}")
    public void deleteMyUser(@PathVariable long id)
	{
		myuserrepos.deleteById(id);
    }
	
}
