/**
 * CREATE TABLE 'crud'.'users' (                                            // use ` instead of '
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `mobile` BIGINT(11) NOT NULL,
  `job-title` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  UNIQUE INDEX `mobile_UNIQUE` (`mobile` ASC));
 */
