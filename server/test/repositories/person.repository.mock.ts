import { PersonRepository } from 'src/repositories/person.repository';
import { RepositoryInterface } from 'src/types';
import { Mocked, vitest } from 'vitest';

export const newPersonRepositoryMock = (): Mocked<RepositoryInterface<PersonRepository>> => {
  return {
    getById: vitest.fn(),
    getAll: vitest.fn(),
    getAllForUser: vitest.fn(),
    getAllWithoutFaces: vitest.fn(),

    getByName: vitest.fn(),
    getDistinctNames: vitest.fn(),

    create: vitest.fn(),
    createAll: vitest.fn(),
    update: vitest.fn(),
    updateAll: vitest.fn(),
    delete: vitest.fn(),
    deleteFaces: vitest.fn(),

    getStatistics: vitest.fn(),
    getAllFaces: vitest.fn(),
    getFacesByIds: vitest.fn(),
    getRandomFace: vitest.fn(),

    reassignFaces: vitest.fn(),
    unassignFaces: vitest.fn(),
    refreshFaces: vitest.fn(),
    getFaces: vitest.fn(),
    reassignFace: vitest.fn(),
    getFaceById: vitest.fn(),
    getFaceByIdWithAssets: vitest.fn(),
    getNumberOfPeople: vitest.fn(),
    getLatestFaceDate: vitest.fn(),

    createAssetFace: vitest.fn(),
    deleteAssetFace: vitest.fn(),
    softDeleteAssetFaces: vitest.fn(),
  };
};
