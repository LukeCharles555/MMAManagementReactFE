package com.bae.persistance.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.GenerationType;

@Entity
@Table(name="FIGHTERS")
public class Fighters {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long fighterID;

	@ManyToOne
	@JoinColumn(name="managerID",nullable = false)
	private Manager manager;
	
	private String firstName;
	private String lastName;
	private int height;
	private int weight;
	
	public Fighters() {
	}
	
	public Fighters(String firstName, String lastName, int height, int weight) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.height = height;
		this.weight = weight;
	}

	public Long getFighterID() {
		return fighterID;
	}
	
	public void setFighterID(Long fighterID) {
		this.fighterID = fighterID;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public int getHeight() {
		return height;
	}
	
	public void setHeight(int height) {
		this.height = height;
	}
	
	public int getWeight() {
		return weight;
	}
	
	public void setWeight(int weight) {
		this.weight = weight;
	}
	
	public Manager getManager() {
		return manager;
	}

	public void setManager(Manager manager) {
		this.manager = manager;
	}

	@Override
	public String toString() {
		return "Fighter [ID=" + fighterID + ", firstName=" + firstName + ", lastName=" + lastName + ", height=" + height
				+ ", weight=" + weight + "]";
	}

	
	
}
