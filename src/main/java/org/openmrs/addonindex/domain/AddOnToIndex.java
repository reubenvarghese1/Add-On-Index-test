package org.openmrs.addonindex.domain;

import org.openmrs.addonindex.backend.BackendHandler;
import org.openmrs.addonindex.backend.BintrayPackageDetails;
import org.openmrs.addonindex.backend.MavenRepoDetails;

/**
 * An OpenMRS add-on that should be indexed.
 * Authors add these to our registry, and the application takes care of indexing them.
 */
public class AddOnToIndex {
	
	private String uid;
	
	private AddOnType type;
	
	private String name;
	
	private String description;
	
	private Class<? extends BackendHandler> backend;
	
	private MavenRepoDetails mavenRepoDetails;
	
	private BintrayPackageDetails bintrayPackageDetails;
	
	public String getUid() {
		return uid;
	}
	
	public void setUid(String uid) {
		this.uid = uid;
	}
	
	public AddOnType getType() {
		return type;
	}
	
	public void setType(AddOnType type) {
		this.type = type;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public Class<? extends BackendHandler> getBackend() {
		return backend;
	}
	
	public void setBackend(Class<? extends BackendHandler> backend) {
		this.backend = backend;
	}
	
	public MavenRepoDetails getMavenRepoDetails() {
		return mavenRepoDetails;
	}
	
	public void setMavenRepoDetails(MavenRepoDetails mavenRepoDetails) {
		this.mavenRepoDetails = mavenRepoDetails;
	}
	
	public BintrayPackageDetails getBintrayPackageDetails() {
		return bintrayPackageDetails;
	}
	
	public void setBintrayPackageDetails(BintrayPackageDetails bintrayPackageDetails) {
		this.bintrayPackageDetails = bintrayPackageDetails;
	}
}
