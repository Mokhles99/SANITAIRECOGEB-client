

/**
 * Génère un identifiant unique pour le panier.
 * @returns {string} Un identifiant unique pour le panier.
 */
export const generateCartId = () => {
    return 'cart_' + Math.random().toString(36).substr(2, 9);
};