"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const resultado_dto_1 = require("../dto/resultado.dto");
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("./usuario.entity");
const bcrypt = require("bcrypt");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async listar() {
        return this.usuarioRepository.find();
    }
    async cadastrar(data) {
        let usuario = new usuario_entity_1.Usuario();
        usuario.email = data.email;
        usuario.nome = data.nome;
        usuario.password = bcrypt.hashSync(data.senha, 8);
        usuario.telefone = data.telefone;
        usuario.cpf = data.cpf;
        return this.usuarioRepository.save(usuario)
            .then((result) => {
            return {
                status: true,
                mensagem: "Usuário cadastrado com  sucesso"
            };
        })
            .catch((error) => {
            return {
                status: false,
                mensagem: "Houve um error ao cadastrar o usuário"
            };
        });
    }
    async findOne(email) {
        return this.usuarioRepository.findOne({ email: email });
    }
};
UsuarioService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('USUARIO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map