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
exports.ServicoController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth/auth.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const resultado_dto_1 = require("../dto/resultado.dto");
const token_service_1 = require("../token/token.service");
const usuario_entity_1 = require("../usuario/usuario.entity");
const servico_service_1 = require("./servico.service");
let ServicoController = class ServicoController {
    constructor(servicoService, tokenService) {
        this.servicoService = servicoService;
        this.tokenService = tokenService;
    }
    async cadastrar(data, req) {
        let token = req.headers.authorization;
        let usuario = await this.tokenService.getUsuarioByToken(token);
        if (usuario) {
            return this.servicoService.cadastrar(data, usuario);
        }
        else {
            throw new common_1.HttpException({
                errorMessage: 'Token inválido'
            }, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post('cadastrar'),
    __param(0, common_1.Body()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ServicoController.prototype, "cadastrar", null);
ServicoController = __decorate([
    common_1.Controller('servico'),
    __metadata("design:paramtypes", [servico_service_1.ServicoService,
        token_service_1.TokenService])
], ServicoController);
exports.ServicoController = ServicoController;
//# sourceMappingURL=servico.controller.js.map