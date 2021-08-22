import { BentoClient } from '../client';
import { DataResponse } from '../client/types';
import { FormResponse } from './types';

export class BentoForms {
  private readonly _url = '/fetch/responses';

  constructor(private readonly _client: BentoClient) {}

  /**
   * Returns all of the responses for the form with the specified identifier.
   *
   * @param formIdentifier string
   * @returns Promise\<FormResponse[] | null\>
   */
  public async getResponses(
    formIdentifier: string
  ): Promise<FormResponse[] | null> {
    try {
      const result = await this._client.get<DataResponse<FormResponse[]>>(
        this._url,
        {
          id: formIdentifier,
        }
      );

      if (Object.keys(result).length === 0 || !result.data) return null;
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
