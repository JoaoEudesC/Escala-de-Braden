//Transformando o projeto do express em serveless adapter para poder hospedar ele no bro

import {ServerlessAdapter} from "@h4ad/serverless-adapter"
import {ExpressFramework} from "@h4ad/serverless-adapter/lib/frameworks/express"
import {DefaultHandler} from "@h4ad/serverless-adapter/lib/handlers/default"
import {PromiseResolver} from "@h4ad/serverless-adapter/lib/resolvers/promise"
import{ApiGatewayV2Adapter} from "@h4ad/serverless-adapter/lib/adapters/aws"
import app from "../src/app"



export const handler = ServerlessAdapter.new(app)
.setFramework(new ExpressFramework())
.setHandler(new DefaultHandler())
.setResolver(new PromiseResolver())
.addAdapter(new ApiGatewayV2Adapter())
.build()

