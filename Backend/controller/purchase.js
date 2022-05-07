const Purchase = require("../model/purchase.model");

const PurchaseControllers = {
  addPurchasedItemDetails: async (req, res) => {
    try {
      const {
        purchase_id,
        purchase_item_name,
        supplier,
        item_type,
        item_add_date,
        item_qnty,
        purchased_price,
        total_item_price,
      } = req.body;

      if (
        !purchase_id ||
        !purchase_item_name ||
        !supplier ||
        !item_type ||
        !item_add_date ||
        !item_qnty ||
        !purchased_price ||
        !total_item_price
      ) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: "All details must be filled.",
        });
      }

      const PurchaseId = await Purchase.findOne({ purchase_id });
      const PurchaseItemName = await Purchase.findOne({ purchase_item_name });

      if (PurchaseId) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: `This ${PurchaseId.purchase_id} id already exist.`,
        });
      }

      if (PurchaseItemName) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: `This ${PurchaseItemName.purchase_item_name} is already exist.`,
        });
      }

      const newPurchasedItem = new Purchase({
        purchase_id,
        purchase_item_name,
        supplier,
        item_type,
        item_add_date,
        item_qnty,
        purchased_price,
        total_item_price,
      });

      await newPurchasedItem.save();

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        PurchasedItemDetails: newPurchasedItem,
        message: "Purchased Items details added successfully.",
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  getAllPurchasedItemsDetails: async (req, res) => {
    try {
      const PurchasedItemDetails = await Purchase.find();

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        PurchasedItemDetails: PurchasedItemDetails,
        message: "All Purchased Items details recieved.",
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  getPurchasedItemsDetailsById: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const PurchasedItemDetails = await Purchase.findById(req.params.id);

        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          PurchasedItemDetails: PurchasedItemDetails,
          message: "All Purchased Items details recieved.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  updatePurchaseDetails: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const {
          purchase_id,
          purchase_item_name,
          supplier,
          item_type,
          item_add_date,
          item_qnty,
          purchased_price,
          total_item_price,
        } = req.body;

        await Purchase.findByIdAndUpdate(req.params.id, {
          purchase_id,
          purchase_item_name,
          supplier,
          item_type,
          item_add_date,
          item_qnty,
          purchased_price,
          total_item_price,
        });

        const PurchasedItemDetails = await Purchase.findById(req.params.id);

        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          PurchasedItemDetails: PurchasedItemDetails,
          message: "Updated successfully.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  deletePurchase: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const PurchasedItemDetails = await Purchase.findByIdAndDelete(
          req.params.id
        );
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          PurchasedItemDetails: PurchasedItemDetails,
          message: "Deleted successfully.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },
};

module.exports = PurchaseControllers;
