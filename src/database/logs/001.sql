ALTER TABLE `AwesomeProject`.`usuario` 
ADD COLUMN `telefone` VARCHAR(14) NULL AFTER `password`,
ADD COLUMN `cpf` VARCHAR(14) NULL AFTER `telefone`;

ALTER TABLE `AwesomeProject`.`usuario` 
CHANGE COLUMN `telefone` `telefone` VARCHAR(15) NULL DEFAULT NULL ;

INSERT INTO `AwesomeProject`.`usuario` (`id`, `nome`, `email`, `password`) VALUES ('2', 'leandro', 'ajajaja@gmail.com', 'snsnsnsnn');
INSERT INTO `AwesomeProject`.`usuario` (`id`, `nome`, `email`, `password`, `telefone`, `cpf`) VALUES ('3', 'leandro', 'leandro@gmail.com', 'guarino', '(45) 45454-5454', '644.142.690-08');
