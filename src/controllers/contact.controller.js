import * as contactService from "../services/contact.service.js"

import {ApiError} from "../middlewares/error.middleware.js"

export const create = async (request, response) => {
    const payload = request.body
    const responseContent = await contactService.create(payload)
    response.status(201).json({data: responseContent});
}

export const findAll = async (request, response) => {
    const contacts = await contactService.findAll();
    response.status(200).json({data: contacts});
}

export const deleteAll = async (request, response) => {
    await contactService.deleteAll();
    response.status(204).send();
}

export const findAllFavorite = async (request, response) => {
    const favoriteContacts = await contactService.findAllFavorite();
    response.status(200).json({data: favoriteContacts});
}

export const findOne = async (request, response) => {
    const id = request.params.id;
    const contact = await contactService.findOne(id)
    if (!contact) {
        throw new ApiError(404, "Contact not found");
    }
    response.status(200).json({data: contact});
}

export const update = async (request, response) => {
    const id = request.params.id;
    const payload = request.body;
    const contact = await contactService.update(id, payload);
    if (!contact) {
        throw new ApiError(404, "Contact not found");
    }
    response.status(200).json({data: contact}); 
}

export const deleteOne = async (request, response) => {
    const id = request.params.id;
    await contactService.deleteOne(id);
    response.status(204).send();
}

