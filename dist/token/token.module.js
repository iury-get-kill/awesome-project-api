"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const usuario_module_1 = require("../usuario/usuario.module");
const database_module_1 = require("../database/database.module");
const token_controller_1 = require("./token.controller");
const token_providers_1 = require("./token.providers");
const token_service_1 = require("./token.service");
let TokenModule = class TokenModule {
};
TokenModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, common_1.forwardRef(() => auth_module_1.AuthModule), usuario_module_1.UsuarioModule],
        controllers: [token_controller_1.TokenController],
        providers: [
            ...token_providers_1.tokenProviders,
            token_service_1.TokenService,
        ],
        exports: [token_service_1.TokenService]
    })
], TokenModule);
exports.TokenModule = TokenModule;
//# sourceMappingURL=token.module.js.map