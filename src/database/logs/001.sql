ALTER TABLE `AwesomeProject`.`usuario` 
ADD COLUMN `telefone` VARCHAR(14) NULL AFTER `password`,
ADD COLUMN `cpf` VARCHAR(14) NULL AFTER `telefone`;

ALTER TABLE `AwesomeProject`.`usuario` 
CHANGE COLUMN `telefone` `telefone` VARCHAR(15) NULL DEFAULT NULL ;
