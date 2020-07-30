export default class Project {
  constructor(
    title,
    brief,
    preview,
    skills,
    aboutBullets,
    solutionsBullets,
    links
  ) {
    this.title = title;
    this.brief = brief;
    this.preview = preview;
    this.skills = skills;
    this.aboutBullets = aboutBullets;
    this.solutionsBullets = solutionsBullets;
    this.links = links;
  }
}
